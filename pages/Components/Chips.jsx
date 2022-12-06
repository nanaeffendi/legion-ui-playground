import React, { useState } from 'react';

import {
  Avatar,
  DynamicIcon,
  Chip,
  Modal,
  Button,
} from 'legion-ui'

export default function ChipsPage() {
  const styles = {
    wrapper: {
      padding: '24px',
    },
    bgSandWrapper: {
      background: '#f5f5f5',
      padding: '24px',
      marginTop: '24px',
      display: 'flex',
      alignItems: 'center',
    }
  };

  const handleChipClick = () => {
    console.log('chip is clicked');
  };

  const deleteChip = (e) => {
    const selectedChip = e.target.parentNode;
    selectedChip.remove();
  };

  const [isActive, setIsActive] = useState(false);
  const toggleModal = () => setIsActive(!isActive);
  const modalFooter = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Button onClick={toggleModal}>I see you</Button>
      </div>
    )
  };
  const closeModal = () => {
    if (isActive) {
      toggleModal();
    }
  };

  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h1>Chips</h1>
      </div>

      <Modal
        isActive={isActive}
        modalId="legion-modal"
        iconName="Anchor"
        title="Chip Action"
        footer={modalFooter()}
        onClose={closeModal}
      >
        Now you see me!
      </Modal>

      <h2 style={{ textAlign: 'center' }}> Small</h2>
      <h4>Variant: Soft</h4>
      <div style={styles.bgSandWrapper}>
        <Chip label='primary clickable' size="sm" onClick={handleChipClick} />
        <Chip
          label='tertiary clickable'
          color='tertiary'
          onClick={toggleModal}
          size="sm"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="sm"
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
          size="sm"
        />
        <Chip
          label='warning'
          color='warning'
          size="sm"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          size="sm"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>

      <h4>Variant: Outline</h4>
      <div style={styles.bgSandWrapper}>
        <Chip
          label='primary clickable'
          size="sm"
          variant='outline'
          onClick={handleChipClick}
        />
        <Chip
          label='tertiary clickable'
          variant='outline'
          color='tertiary'
          onClick={handleChipClick}
          size="sm"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="sm"
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          size="sm"
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
        />
        <Chip
          label='warning'
          color='warning'
          size="sm"
          variant='outline'
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          variant='outline'
          size="sm"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>

      <hr style={{ margin: '40px 0', border: '1px solid #f2f2f2' }} />

      <h2 style={{ textAlign: 'center' }}>Medium - Default Size</h2>
      <h4>Variant: Soft</h4>
      <div style={styles.bgSandWrapper}>
        <Chip label='primary clickable' onClick={handleChipClick} />
        <Chip
          label='tertiary clickable'
          color='tertiary'
          onClick={handleChipClick}
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
        />
        <Chip
          label='warning'
          color='warning'
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>

      <h4>Variant: Outline</h4>
      <div style={styles.bgSandWrapper}>
        <Chip
          label='primary clickable'
          variant='outline'
          onClick={handleChipClick}
        />
        <Chip
          label='tertiary clickable'
          variant='outline'
          color='tertiary'
          onClick={handleChipClick}
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
        />
        <Chip
          label='warning'
          color='warning'
          variant='outline'
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          variant='outline'
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>

      <hr style={{ margin: '40px 0', border: '1px solid #f2f2f2' }} />

      <h2 style={{ textAlign: 'center' }}>Large</h2>
      <h4>Variant: Soft</h4>
      <div style={styles.bgSandWrapper}>
        <Chip label='primary clickable' size="lg" onClick={handleChipClick} />
        <Chip
          label='tertiary clickable'
          color='tertiary'
          onClick={handleChipClick}
          size="lg"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="lg"
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
          size="lg"
        />
        <Chip
          label='warning'
          color='warning'
          size="lg"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          size="lg"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>

      <h4>Variant: Outline</h4>
      <div style={styles.bgSandWrapper}>
        <Chip
          label='primary clickable'
          size="lg"
          variant='outline'
          onClick={handleChipClick}
        />
        <Chip
          label='tertiary clickable'
          variant='outline'
          color='tertiary'
          onClick={handleChipClick}
          size="lg"
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Delete me'
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="lg"
          style={{ marginRight: '12px' }}
        />
        <Chip
          label='success!'
          color='success'
          size="lg"
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
        />
        <Chip
          label='warning'
          color='warning'
          size="lg"
          variant='outline'
          style={{ margin: '0 6px' }}
        />
        <Chip
          label='Chip with avatar'
          color='info'
          variant='outline'
          size="lg"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
        />
      </div>
      
      <hr style={{ margin: '40px 0', border: '1px solid #f2f2f2' }} />
      <h2 style={{ textAlign: 'center' }}> Icon / Avatar only</h2>

      <div style={styles.bgSandWrapper}>
        <Chip
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="sm"
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='success'
          size="sm"
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='info'
          variant='outline'
          size="sm"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
          onClick={toggleModal}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='success'
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='info'
          variant='outline'
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
          onClick={toggleModal}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='error'
          variant='outline'
          rightIcon={<DynamicIcon name="XCircle" size="16" />}
          onClick={deleteChip}
          size="lg"
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='success'
          size="lg"
          variant='outline'
          leftIcon={<DynamicIcon name="CheckCircle" size="16" />}
          style={{ marginRight: '12px' }}
        />
        <Chip
          color='info'
          variant='outline'
          size="lg"
          avatar={<Avatar src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />}
          onClick={toggleModal}
        />
      </div>
    </div>
  )
}
