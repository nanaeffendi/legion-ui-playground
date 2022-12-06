import { Dropdown, Button, DynamicIcon, Anchor } from 'legion-ui'
import { useState } from 'react'

const ExampleOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsOpen(true);
  // }
  
  const onDropdown = () => setIsOpen(!isOpen);

  const closeDd = () => {
    console.log('on close dd')
  }

  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3>Dropdown</h3>
      </div>
      <div style={{ padding: '12px' }}>
        <Dropdown 
          trigger={<Button onClick={onDropdown} iconRight={<DynamicIcon name="ChevronDown" />}>Select</Button>}
          isOpen={isOpen}
          onClose={closeDd}
        >
          <div className="example-body">
            <Anchor>New File</Anchor>
            <Anchor>View Detail</Anchor>
            <Anchor>Edit File</Anchor>
            <Anchor>Save to Favorite</Anchor>
          </div>
          <div className="example-footer">
            <Anchor>Delete File</Anchor>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default ExampleOne
