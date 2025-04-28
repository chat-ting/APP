import { css } from '@emotion/react'
import { JSX } from '@emotion/react/jsx-runtime'
import { useLayoutEffect, useRef, type ComponentProps, type ReactNode } from 'react'

type Opts = {
  Icon?: ReactNode | JSX.Element
  theme?: 'dark' | 'light'
  size?: 'full' | 'fit'
}

export type TextAreaProps = Opts & Omit<ComponentProps<'textarea'>, 'size'> & {}

export function TextArea({
  Icon,
  theme = 'light',
  size = 'full',
  ...props
}: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleSize = () => {
    const TA = textAreaRef.current
    if (!TA) return
    TA.style.height = 'auto'
    TA.style.height = `${TA.scrollHeight}px`
  }

  useLayoutEffect(() => {
    if (textAreaRef.current) handleSize()
  }, [])

  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
        width: ${size === 'full' ? '100%' : 'auto'};
        border: 1px solid transparent;
        border-radius: 0.75rem;
        padding: 0.7rem 1rem;
        color: var(--color-text);
        outline: 1px solid var(--color-bg3);
        background-color: transparent;
        &:hover {
        }
        &:focus-within {
        }
      `}
    >
      <div
        css={css`
          padding-top: 0.35rem;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {Icon ?? 'ㅋㅋ'}
      </div>
      <textarea
        rows={1}
        placeholder={props.placeholder ?? '메시지 보내기'}
        onInput={handleSize}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) e.preventDefault()
        }}
        ref={textAreaRef}
        css={css`
          width: 100%;
          box-sizing: content-box;
          min-height: calc(0.95rem * 1.65rem);
          resize: none;
          background-color: transparent;
          border: none;
          margin: 0.25rem 0 0 0;
          overflow: hidden;
          font-size: 0.9rem;
          line-height: 1.65;
          padding-block: 0;
          padding-inline: 1rem;
          outline: none;
        `}
        {...props}
      />
    </div>
  )
}
