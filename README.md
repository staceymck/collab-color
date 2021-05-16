# Collab-Color

## Description
As an artist and programmer with a background in nonprofit service, I enjoy the creative process - especially when it grows from collaboration. I’ve worked on group art projects where individuals contributed similar but unique elements that were then formed into one collective artwork with an almost mosiac feel. I wanted to share this experience with others, so I developed a collaborative art app using React on the frontend and a Rails API backend. [Watch demo](https://www.youtube.com/watch?v=1vj96n49h8c)

Contribute to a collective artwork by coloring in one or more tiles through this click-to-color app. 
<br><img src="public/readme-images/home.png" alt="Home page view with description of app beside 3x3 grid of squares composed of colorful triangles" width="500">

Users can choose from one of three canvases and add colors by clicking individual shapes.
<br><img src="public/readme-images/paint.png" alt="Painting page view with partly-colored canvas beside a color picker and buttons to post to gallery or reset page" width="500">

On the gallery page, users can see their artwork displayed alongside other contributions. The gallery pattern can be transformed by applying a new sorting method: newest (default), oldest, or random.
<br><img src="public/readme-images/gallery.png" alt="Gallery page view with 3x6 grid of finsihed paintings below three sort options" width="500">

## Technology
This frontend repo connects to a Rails API backend and was built with the [create-react-app](https://github.com/facebook/create-react-app) generator and Redux. Redux Thunk middleware is used to handle asynchronous actions. Canvases and paintings are SVGs. 

[Backend Repo](https://github.com/staceymck/collab-color-backend)

## License
The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).