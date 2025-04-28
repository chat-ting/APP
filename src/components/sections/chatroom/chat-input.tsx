import { css } from '@emotion/react'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Btn } from 'components/common/btn'
import { TextArea, TextAreaProps } from 'components/common/textarea'

export function ChatInput({ ...props }: Omit<TextAreaProps, 'Icon'>) {
  return (
    <div
      css={css`
        position: absolute;
        width: calc(100% - 7.5rem);
        bottom: 1.5rem;
      `}
    >
      <TextArea
        {...props}
        Icon={
          <Btn
            css={css`
              padding-block: 0;
            `}
          >
            <DotsHorizontalIcon width="1.1rem" height="1.1rem" />
          </Btn>
        }
      />
    </div>
  )
}
