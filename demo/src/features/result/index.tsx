import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import { Box, Stack, Title } from '@mantine/core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import { resultAtom } from '../../store'

export const Result: FC = () => {
  const result = useRecoilValue(resultAtom)
  return (
    <Stack>
      <Title>Result</Title>
      <Box h='70vh' style={{ overflow: 'scroll' }}>
        <Editor
          value={result}
          disabled
          onValueChange={() => {}}
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
