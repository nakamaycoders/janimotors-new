<div className="container-fluid">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>Filters</Item>
        </Grid>
        {
          product.products.map((p)=>{
            console.log(ImageUrl(p.productPictures[0].img))
            return(
        <Grid key={p} item xs={9}>
          <Item>
            <Link to={`/${p.slug}/${p._id}/p`}>
            <img src={ImageUrl(p.productPictures[0].img)} alt=""></img>
            </Link>
            <Typography variant="h3" component="h1">{p.slug}</Typography>
            <Typography variant="h5" component="h5">Price</Typography>
            <Typography>{p.price}</Typography>
            <Typography variant="h5" component="h5">Milage</Typography>
            <Typography>{p.milage}</Typography>
            <Button variant="contained">Detail</Button>
          </Item>
        </Grid>

)
})
}
      </Grid>
    </div>