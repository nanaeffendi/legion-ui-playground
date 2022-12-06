import { SidebarNavLink } from 'legion-ui'

export default function AccordionPage() {
  const navLinkList = [
    { icon: "", route: '', title: 'Home' },
    { icon: "", route: '', title: 'Profile' },
    { icon: "", route: '', title: 'Setting' }
  ];

  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3>SidebarNavLink</h3>
      </div>
      <div style={{ padding: '12px' }}>
        <SidebarNavLink listItems={navLinkList} />
      </div>
    </div>
  )
}
