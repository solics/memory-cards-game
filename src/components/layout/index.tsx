import LOGO from '../../assets/images/logo.png'
import useLayout from '../../hooks/useLayout'

export const Layout = ({ children }: { children: React.ReactElement }) => {
  useLayout()

  return (
    <div className="layout">
      <div className="content">
        <header>
          <div className="logo">
            <img src={LOGO} />
          </div>
          <div className="heading">Juego de memoria</div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
