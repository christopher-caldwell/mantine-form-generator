import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import { Box, Typography } from '@mui/material'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import { configAtom } from '@/store'

export const Config: FC = () => {
  const [code, setCode] = useRecoilState(configAtom)
  return (
    <Box sx={{ width: { lg: '40vw', xl: '30vw' }, justifyContent: 'flex-start' }}>
      <Typography variant='h1' sx={{ fontSize: '2em', marginBottom: ({ spacing }) => spacing(3) }}>
        Config
      </Typography>
      <Box sx={{ height: '90vh', overflow: 'scroll' }}>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js, 'js')}
          padding={10}
          style={{
            width: '100%',
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 18
          }}
        />
      </Box>
    </Box>
  )
}
