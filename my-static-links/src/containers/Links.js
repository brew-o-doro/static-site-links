import React from 'react';
import { Header, Card, Image } from 'semantic-ui-react';


const Links = () => (
            <><Header as='h1'>Hello, my name is Teodoro Garcia.</Header>
            <Header as='h4'>I am a full-stack software engineer, content creator, and official GitKraken Ambassador!</Header>
            <Card.Group>
                <Card>
                    <Card.Content href='https://github.com/tedtke'>
                        <Image floated='right'size='mini' src='https://clipground.com/images/github-logo-svg-6.jpg'/>
                        <Card.Header>GitHub</Card.Header>
                        <Card.Description>view my recent projects and their source code 👨🏽‍💻 </Card.Description>
                    </Card.Content>
                    
                </Card>
                <Card>
                    <Card.Content href='https://www.gitkraken.com/invite/5mvwUFjE'>
                        <Image floated='right'size='mini' src='https://tse3.mm.bing.net/th?id=OIP.VPSG-eEgwHOcjk8zO73EEQHaHa&pid=Api'/>
                        <Card.Header>GitKraken</Card.Header>
                        <Card.Description>Use my link to get the GitKraken Git GUI, GitKraken Boards &amp; GitKraken Timelines FREE! We'll both be entered to win $100 Amazon gift cards! 🐙</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content href='https://medium.com/@tedtke514'>
                        <Image floated='right'size='mini' src='https://tse3.mm.bing.net/th?id=OIP.yDRgCcndS1hPqCRGsp9GsQHaHa&pid=Api'/>
                        <Card.Header>Medium Blog</Card.Header>
                        <Card.Description>Check out what I'm writing about! ✏️</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content href='https://ko-fi.com/tedtke'>
                        <Image floated='right'size='mini' src='https://help.ko-fi.com/hc/article_attachments/360028221533/ko-fi_logo.png'/>
                        <Card.Header>Ko-fi</Card.Header>
                        <Card.Description>Buy me a cup of coffee ☕️</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group></>
)

export default Links;