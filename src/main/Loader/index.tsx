import { Loader as UIKitLoader } from 'uikit/components'

import styles from './index.module.css'

const Loader = () => (
  <div className={styles.main}>
    <UIKitLoader
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
      }}
    />
  </div>
)

export default Loader
