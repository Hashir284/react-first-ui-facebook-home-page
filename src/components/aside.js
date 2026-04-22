export const Asidetitle = (p) => {
    return (
        <div className={p.c}>
            <i className={p.i}></i>
            {p.t}
        </div>
    )
}
export const Asidecontact = (p) => {
    return (
        <div className={p.c}>
            <img alt="" src={p.src} className={p.i}></img>
            {p.t}
        </div>
    )
}

export const Mainpost = (p) => {
    return (
        <div className='main-post'>
            <div className='mainpost-detailer'>
                <div>
                    <img alt="" src={p.src} className="outline" />
                    <div>
                        <div className='post-id'>{p.id}</div>
                        <div className='post-time'>{p.time} · <i className="fa-solid fa-people-group"></i></div>
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className='main-post-title'>{p.title}</div>

            <img alt="" src={p.psrc} className='main-post-img ' />

        </div>
    )
}