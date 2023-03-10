interface ButtonProps {
  children?: React.ReactNode
}

// TODO: Button 컴포넌트 구현
export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    className="rounded-[32px] bg-primary-400 px-8 py-2.5 transition hover:bg-primary-500"
  >
    <p className="label-s font-medium text-white">{children}</p>
  </button>
)
