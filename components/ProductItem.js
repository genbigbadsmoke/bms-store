import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { urlForThumbnail } from '../utils/image'

export default function ProductItem({product}) {
  return (
    <Card sx={{ maxWidth: 150 }}>
        <NextLink href={`/product/${product.slug.current}`} passHref>
            <CardActionArea>
                <CardMedia component='img' image={urlForThumbnail(product.image)} title={product.name}></CardMedia>
                <CardContent>
                    <Typography>{product.name}</Typography>
                    <Typography>&#8358;{product.price}</Typography>
                </CardContent>
            </CardActionArea>
        </NextLink>
    </Card>
  )
}
