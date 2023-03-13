interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

// TODO: Button 컴포넌트 구현
export const Button = ({ children, ...buttonProps }: ButtonProps) => (
  <button
    {...buttonProps}
    type="button"
    className="rounded-[32px] bg-primary-400 px-8 py-2.5 transition hover:bg-primary-500"
  >
    <p className="label-s font-medium text-white">{children}</p>
  </button>
)
