import React from 'react'
import { animated, useTransition } from 'react-spring'
import { useThemeModeTransition } from 'common/hooks'
import { observer } from 'mobx-react-lite'
import { Loader } from 'uikit/components'
import { initTheme } from 'uikit/themes'

import { Container, CssBaseline, ThemeProvider } from '@mui/material'

import { useContext } from '../context'
import styles from './index.module.css'

interface PageProps {
  App: React.FC
  config: any
}

const Page = ({ App, config }: PageProps) => {
  const { state, theme } = useContext()

  const mode = useThemeModeTransition({ isDarkTheme: state.main.isDarkTheme })

  const transition = useTransition(state.main.isLoader, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
  })

  const updateTheme = React.useMemo(
    () =>
      initTheme(config.theme, {
        palette: {
          mode: mode,
        },
      }),
    [mode],
  )

  return (
    <div className={styles.page_main}>
      {theme ? (
        <ThemeProvider theme={updateTheme}>
          <CssBaseline />
          <Container
            className={styles.page_main}
            maxWidth={false}
            sx={{
              maxWidth: '1400px',
              paddingLeft: '16px !important',
              paddingRight: '16px !important',
            }}
          >
            <App />
          </Container>
        </ThemeProvider>
      ) : (
        <App />
      )}
      {transition(
        (data, item) =>
          item && (
            <animated.div
              style={{
                width: '36px',
                height: '36px',
                position: 'fixed',
                top: 'calc(50% - 18px)',
                left: 'calc(50% - 18px)',
                ...data,
              }}
            >
              <Loader />
            </animated.div>
          ),
      )}
    </div>
  )
}

export default observer(Page)
