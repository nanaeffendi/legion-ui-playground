import { SidebarWrapper, SidebarNavLink } from 'legion-ui';
// import { useRouter } from 'next/router';

export default function Sidebar() {
  // const router = useRouter();
  
  const sidebarMenuItems = [
    { icon: 'Home', route: '/', title: 'Home' },
    {
      icon: 'Folder', route: '#', title: 'Components', isParent: true, submenuItems:
        [
          { icon: 'Archive', route: '/Components/Accordion', title: 'Accordion' },
          { icon: 'Layout', route: '/Components/SidebarNavLink', title: 'SidebarNavLink' },
          { icon: 'Airplay', route: '/Components/Modal', title: 'Modal' },
          { icon: 'Airplay', route: '/Components/Dropdown', title: 'Dropdown' },
          { icon: 'Airplay', route: '/Components/Chips', title: 'Chips' },
          { icon: 'BookOpen', route: '/Components/TabBar', title: 'TabBar' }
        ]
    },
    { icon: 'BookOpen', route: 'https://google.com', title: 'Library' },
    { icon: 'Book', route: 'https://google.com', title: 'Articles' },
    { icon: 'Settings', route: 'https://google.com', title: 'Settings' },
    {
      icon: 'HelpCircle', route: '#', title: 'About us', isParent: true, submenuItems:
        [
          { icon: 'Coffee', route: 'https://google.com', title: 'sub profile 1' },
          { icon: 'Box', route: 'https://google.com', title: 'sub profile 2' },
          { icon: 'Box', route: 'https://google.com', title: 'sub profile 3' }
        ]
    },
    { icon: 'BookOpen', route: 'https://google.com', title: 'Library' },
    { icon: 'Book', route: 'https://google.com', title: 'Articles' },
    { icon: 'Settings', route: 'https://google.com', title: 'Settings' },
    {
      icon: 'HelpCircle', route: '#', title: 'About us', isParent: true, submenuItems:
        [
          { icon: 'Coffee', route: 'https://google.com', title: 'sub profile 1' },
          { icon: 'Box', route: 'https://google.com', title: 'sub profile 2' },
          { icon: 'Box', route: 'https://google.com', title: 'sub profile 3' }
        ]
    },
    { icon: 'BookOpen', route: 'https://google.com', title: 'Library' },
    { icon: 'Book', route: 'https://google.com', title: 'Articles' },
    { icon: 'Settings', route: 'https://google.com', title: 'Settings' },
  ];

  const sidebarHeader = () => {
    return (
      <div>
        <h3>Sidebar Header</h3>
        custom header slot here
      </div>
    )
  };

  const sidebarFooter = () => {
    return (
      <div>
        custom footer slot here
      </div>
    )
  };

  return (
    <SidebarWrapper
      header={sidebarHeader()}
      footer={sidebarFooter()}
      isCollapsible={true}
      isHidden={true}
    >
      {/* Pass sidebar body here */}
      <SidebarNavLink listItems={sidebarMenuItems} />
    </SidebarWrapper>
  )
}
