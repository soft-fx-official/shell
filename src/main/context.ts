import React from 'react'
import {
  IInitApiR,
  IInitApp,
  IInitStateR,
  IInitStorageR,
  initApi,
  initApp,
  initLocale,
  initState,
  initStorage,
} from 'common/inits'
import { Bus, IBus } from 'common/tools'
import { i18n } from 'i18next'
import { initTheme, Theme } from 'uikit/themes'
import { setLocale } from 'yup'

import { ICreateMainArgs } from './index'

interface IContext {
  storage: IInitStorageR
  i18next: i18n
  api: IInitApiR
  state: IInitStateR
  theme: Theme | null
  bus: IBus
}

type TuseContext = () => IContext

const Context = React.createContext<any>({})

const useContext: TuseContext = () => React.useContext(Context)

type TinitContextData = {
  isPrefersDarkMode?: boolean
} & Omit<ICreateMainArgs, 'App'>

async function initContext(bus: IBus | null, data: TinitContextData) {
  const {
    config,
    initCurrentApp,
    State,
    defaultStateParams,
    translationResources,
    isPrefersDarkMode,
  } = data

  const isRootApp = !bus

  const currentBus = !isRootApp ? bus : new Bus()

  const storage = initStorage(config.appName)

  const i18next = initLocale({
    ...config.i18next,
    resources: {
      ...translationResources,
    },
  })

  setLocale({
    mixed: {
      default: () => i18next.t('form.validate.invalide'),
      required: () => i18next.t('form.validate.required'),
    },
    string: {
      email: () => i18next.t('form.validate.email'),
      min: ({ min }) => i18next.t('form.validate.string.min', { min }),
      max: ({ max }) => i18next.t('form.validate.string.max', { max }),
    },
    number: {
      min: ({ min }) => i18next.t('form.validate.number.min', { min }),
      max: ({ max }) => i18next.t('form.validate.number.max', { max }),
    },
  })

  const api = initApi(config.api, storage, currentBus)

  const state = initState(storage, new State(defaultStateParams), isPrefersDarkMode)

  const theme = !isRootApp ? null : initTheme(config.theme, {})

  const context = { storage, i18next, api, state, theme, bus: currentBus }

  if (isRootApp) {
    window.addEventListener('hashchange', () => {
      currentBus?.say('routing', { route: window.location.hash })
    })
  }

  await initApp({ storage, i18next, state, bus: currentBus, api }, initCurrentApp)

  return context
}

export { Context, initContext, useContext }
export type { IContext }
