import React from 'react'
import { useTheme, css } from '@emotion/react'

function App() {
  const theme = useTheme()

  return (
    <div>
      <h1 css={css`${theme.fonts['display-24B']};`}>폰트 테스트 - Display 24B</h1>
      <p css={css`${theme.fonts['body-14R']};`}>안녕하세요! Pretendard Regular 테스트 중입니다.</p>
    </div>
  )
}

export default App
