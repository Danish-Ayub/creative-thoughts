import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div id='__layout' className='mx-6 md:max-w-2xl md:mx-auto'>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
