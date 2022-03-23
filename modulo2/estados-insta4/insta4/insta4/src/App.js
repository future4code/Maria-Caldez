import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Belén'}
          fotoUsuario={'https://scontent.ffln1-1.fna.fbcdn.net/v/t31.18172-8/16422735_707581702756439_1848957678187567199_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGqm40RnMNkSISR7WdliEQRRxz11t5PPOxHHPXW3k887DX1rE9xISuOb10uzSGb_6FHNH7qSjGLZz7tABZ_MHMU&_nc_ohc=4aTiKo1HmFcAX-hqjNj&_nc_ht=scontent.ffln1-1.fna&oh=00_AT8ukmbyCUY_qW5nlpZA5bfOt2RXmKpH3JP1u-rVYZfimw&oe=62629404'}
          fotoPost={'https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg'}
        />
          
        <Post
          nomeUsuario={'María'}
          fotoUsuario={'https://scontent.ffln1-1.fna.fbcdn.net/v/t1.6435-9/51495620_1150951125086159_1195940047367438336_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHbX8KWoUSISStqgiziTpk8GVOJRWsL_TAZU4lFawv9MPahAQk83h2pBJKEl-48h3lgkTIdHfCbXS34Ad15i3C0&_nc_ohc=ZUZDIM7Ds84AX-Q4pzB&_nc_ht=scontent.ffln1-1.fna&oh=00_AT-GpsOVlfp_Xqn6wKx5uNyKUt_aWuNHQgzYky0op3QUVg&oe=62612834'}
          fotoPost={'https://i.pinimg.com/550x/05/12/06/05120683bf99b82b418d6368a37e3e42.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
