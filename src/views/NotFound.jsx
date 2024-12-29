import React from 'react'
import { Segment, Header, Icon, Button ,SegmentInline} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {

    const navigate = useNavigate();
  return (
    <Segment placeholder>
    <Header icon>
      <Icon name='bug' />
     Lo sentimos la pagina a la que intentas ingresar no existe
    </Header>
    <SegmentInline>
      <Button primary onClick={()=>navigate('/')}>Regresar</Button>
    </SegmentInline>
  </Segment>
  )
}
