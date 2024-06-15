import axios from "axios";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import React, { useEffect, useState } from 'react';
import { FilmInfo, Films } from "../type/data"


export const Cards: React.FC = () => {
    const [films, setPosts] = useState<FilmInfo[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            axios.defaults.headers['X-API-KEY'] = 'EH9KRTS-AE545FM-GH3QFKQ-125C7VK';
            const result = await axios.get<Films>(
                'https://api.kinopoisk.dev/v1.4/movie?isSeries=false',
            );
            setPosts(result.data.docs);
        };
        fetchData();
    }, []);
    return (<div>
        {films?.map((item: FilmInfo) => (
            <div key={item.id}>
                <Card variant="outlined" sx={{ width: 320 }}>
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            {item.poster?.url ? (
                                <img src={item.poster.url} alt={item.name ? item.name : item.alternativeName} loading="lazy"/>
                            ) : (
                                <div>No Image Available</div>
                            )}
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-md">{item.name ? item.name : item.alternativeName}</Typography>
                    </CardContent>
                    <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                                {item.rating?.imdb}
                            </Typography>
                            <Divider orientation="vertical" />
                            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                                {item.year}
                            </Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </div>
        ))}
    </div>);
}