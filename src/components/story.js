export const Story = (props) => {
    return (
        <figure>
            <div className="bg-img-story"><img src={props.src} height='100px' width='100px' /></div>
            <figcaption className="title">
                {props.title}
            </figcaption>
            <div className='pos-img-div'><img src={props.src2} className={props.cl} /></div>
        </figure>
    )
}