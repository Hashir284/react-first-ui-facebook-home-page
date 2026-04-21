export const Asidetitle = (p) => {
    return (
        <div className={p.c}>
            <i class={p.i}></i>
            {p.t}
        </div>
    )
}
export const Asidecontact = (p) => {
    return (
        <div className={p.c}>
            <img src={p.src} class={p.i}></img>
            {p.t}
        </div>
    )
}

export const Mainpost = (p) => {
    return (
        <div className='main-post'>
        <div className='mainpost-detailer'>
            <div>
                <img src={p.src} className="outline" />
                <div>
                    <div className='post-id'>{p.id}</div>
                    <div className='post-time'>{p.time} · <i className="fa-solid fa-people-group"></i></div>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>

        <div className='main-post-title'>{p.title}</div>

        <img src={p.psrc} className='main-post-img ' />

    </div>
    )
}
{/* <div className='aside-pages l-1'>
            <i class="fa-solid fa-bookmark"></i>
            Saved
        </div> */}