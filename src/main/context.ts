import React from 'react'
import {
  IInitApiR,
  IInitStateR,
  IInitStorageR,
  initApi,
  initLocale,
  initState,
  initStorage,
} from 'common/inits'
import { Bus, IBus } from 'common/tools'
import { i18n } from 'i18next'
import { initTheme, Theme } from 'uikit/themes'

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
  bus: IBus | null
} & Omit<ICreateMainArgs, 'App' | 'initCurrentApp'>

function initContext(data: TinitContextData) {
  const {
    bus: receivedTire,
    config,
    State,
    defaultStateParams,
    translationResources,
    isPrefersDarkMode,
  } = data

  const isRootApp = !receivedTire

  const bus = isRootApp ? new Bus() : receivedTire

  const storage = initStorage(config.appName)

  const i18next = initLocale({
    ...config.i18next,
    resources: {
      ...translationResources,
    },
  })

  const api = initApi(config.api, storage, bus)

  const state = initState(storage, new State(defaultStateParams), isPrefersDarkMode)

  const theme = isRootApp ? initTheme(config.theme, {}) : null

  const context = { storage, i18next, api, state, theme, bus }

  return context
}

export { Context, initContext, useContext }
export type { IContext }
