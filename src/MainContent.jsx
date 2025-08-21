import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';


const cardData = [
    {
        title: 'Rect + Boostrap',
        url: 'https://airfly-cat-coffee.netlify.app/',
        img: '/coffeeApp.png',
        alt: 'Cat Coffee',
        sub: '點飲品系統',
        description: '簡單的登入驗證、可註冊、可資料儲存、可看個人消費資訊；已有test@mail.com密碼123456'
    },
    {
        title: 'Rect + Material UI',
        url: 'https://airfly-world-weather.netlify.app/',
        img: '/weatherApp.png',
        alt: 'World Weather',
        sub: 'API 天氣資料串接',
        description: 'Open Data、API key、可查尋全球城市天氣'
    },
    {
        title: 'Rect + Material UI',
        url: 'https://airfly-ai-gpt.netlify.app/',
        img: '/chatGPT.png',
        alt: 'Chat APP',
        sub: 'API串接ChatGPT',
        description: 'API key、可聊天'
    },
];


export default function MainContent() {


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pb: 5 }}>
            <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', mx: 1, py: 4 }}>
                作品
            </Typography>
            <Grid container spacing={2} columns={12}
                sx={{
                    alignItems: "stretch",
                    pb: 4
                }}
            >
                {
                    cardData.map((card, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ maxWidth: 350, mx: 'auto' }}>
                                <CardActionArea>
                                    <Link
                                        href={card.url}
                                        underline="none"
                                        color="inherit"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CardHeader
                                            title={card.title}
                                            sx={{ textAlign: 'center', mx: 1 }}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={card.img}
                                            alt={card.alt}
                                        />
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {card.sub}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', mx: 1 }}>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}
