import { FC } from 'react'
import { useRecoilState } from 'recoil'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import { Box, Stack, Title } from '@mantine/core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import { configAtom } from '../../store'

export const Config: FC = () => {
  const [code, setCode] = useRecoilState(configAtom)
  return (
    <Stack>
      <Title>Config</Title>
      <Box h='90vh' style={{ overflow: 'scroll' }}>
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
    </Stack>
  )
}
