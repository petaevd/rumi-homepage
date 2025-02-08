import { Button } from 'components/ui/Button/Button.tsx';
import React from 'react';

export const UiPage = () => {
  
  return(
    <div>
      <div className='buttons'>
        <Button children="Пример" size='medium' appearance='solid' variant='primary'/>

        
        <Button rounded>Simple Rounded</Button>

        <Button
          backgroundColor="#ff00ff"
          textColor="#fff"
          borderColor="#ff00ff"
          appearance="outline"
        >
          Custom Colors
        </Button>

        <Button rounded={20} variant="success" appearance="solid">
          Rounded Button
        </Button>

        <Button
          variant="dark"
          appearance="solid"
          size="large"
          rounded
          style={{ fontWeight: 'bold' }}
          onClick={() => console.log('Clicked!')}
        >
          Cool
        </Button>
      </div>
    </div>
  );
};
