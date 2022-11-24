import React from 'react'
import { animated, useTransition } from 'react-spring'
import { initApp, TinitApp } from 'common/inits'
import { IBus } from 'common/tools'

import { useMediaQuery } from '@mui/material'

import { Context, initContext, useContext } from './context'
import Error from './Error'
import Loader from './Loader'
import Page from './Page'

interface ICreateMainArgs {
  App: React.FC
  config: any
  initCurrentApp: TinitApp
  State: any
  defaultStateParams: any
  translationResources: { [locale: string]: Record<string, any> }
}

interface IMainParams {
  isLoader: boolean
  isAnimate: boolean
  onLoad: () => void
  onError: (error: any) => void
  onDone: () => void
}

type MainProps = {
  bus: IBus | null
  params: IMainParams | null
}

function createMain(args: ICreateMainArgs): React.FC<MainProps> {
  const { App, config, initCurrentApp } = args

  const Main = ({ bus, params }: MainProps) => {
    const { isLoader, isAnimate, onLoad, onError, onDone }: IMainParams = {
      ...{
        isLoader: true,
        isAnimate: true,
        onLoad: () => null,
        onError: (error: any) => null,
        onDone: () => null,
      },
      ...params,
    }

    const [Component, setComponent] = React.useState<React.ReactElement>(
      isLoader ? <Loader /> : <></>,
    )

    const transition = useTransition(Component, {
      from: { opacity: isAnimate ? 0 : 1 },
      enter: { opacity: 1 },
      leave: { opacity: isAnimate ? 0 : 1 },
      config: { duration: 250 },
    })

    const isPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const setError = (error: Error | string | unknown) => {
      console.info('[MAIN][ERROR]: ', error)
      setComponent(<Error error={error} />)
      onError(error)
    }

    React.useEffect(() => {
      const runApp = async () => {
        try {
          onLoad()

          const context = initContext({ ...args, isPrefersDarkMode, bus })

          await initApp({ ...context, isRootApp: !bus }, initCurrentApp)

          setComponent(
            <Context.Provider value={context}>
              <Page config={config} App={App}></Page>
            </Context.Provider>,
          )

          onDone()
        } catch (error) {
          setError(error)
        }
      }

      runApp()
    }, [])

    return transition((data, component) => (
      <animated.div className="page" style={data}>
        {component}
      </animated.div>
    ))
  }

  return Main
}

export { createMain, useContext }
export type { ICreateMainArgs, IMainParams, MainProps }
