import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://th.bing.com/th/id/OIP.eTgfKXFrA9DlQDymMIFehgHaE7?w=280&h=187&c=7&o=5&pid=1.7'}} />
            <Body>
              <Text>Arbaz khan</Text>
              <Text note>Coder</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://th.bing.com/th/id/OIP.eTgfKXFrA9DlQDymMIFehgHaE7?w=280&h=187&c=7&o=5&pid=1.7'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
  );
}

const styles = StyleSheet.create({
  
});
