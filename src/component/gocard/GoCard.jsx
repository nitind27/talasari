const datas = [
    {
        img: '/Img/img10.png',
        bgImage: '/public/Img/newsletter-bg-1.png',
        bgPosition: 'bottom left',
        title: 'Title 1',
        content: 'A citizen Connect Fortnightly Newsletter',
    },
    {
        img: '/Img/img10.png',
        title: 'Title 2',
        content: 'VOICE OF THE YOUTH',
    },
    {
        img: '/Img/img10.png',
        title: 'Title 3',
        bgImage: '/public/Img/newsletter-bg-2.png', bgPosition: 'bottom right',
        content: 'INDIA’S Narrative Overseas',
    },

];

const GoCard = () => {
    return (
        <div className="main-card" style={{ marginTop: '50px', marginBottom: '100px', justifyContent: 'space-evenly', display: 'flex' }}>
            <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {datas.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'white',
                            backgroundImage: `url(${item.bgImage})`,
                            backgroundPosition: item.bgPosition,
                            backgroundRepeat: "no-repeat",
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
                            height: '519px',
                            alignItems: 'center',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            position: 'relative',
                        }}
                    >
                        {/* Title and Content */}
                        <div style={{ padding: '16px', textAlign: 'center' }}>
                            <h2 style={{ margin: '0 0 8px 0', fontSize: '31px', fontWeight: 'bold' }}>
                                {item.title}
                            </h2>
                            <span style={{ fontSize: '14px', color: '#666' }}>{item.content}</span>
                        </div>

                        {/* Image */}
                        <div>
                            <img
                                src={item.img}
                                alt="img"
                                style={{ width: '100%', height: '100%', }}
                            />
                        </div>

                        {/* Buttons */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                padding: '16px',
                                gap: '14px'

                            }}
                        >
                            <button style={{ padding: '8px 16px', border: '1px solid grey', borderRadius: '4px', cursor: 'pointer', fontSize: "0.8125em", background: 'white' }}>
                                View Latest Edition
                            </button>
                            <button style={{ padding: '8px 16px', border: '1px solid grey', borderRadius: '4px', cursor: 'pointer', fontSize: "0.8125em", background: 'white' }}>
                                View E-book
                            </button>
                            <button style={{ padding: '8px 16px', border: '1px solid grey', borderRadius: '4px', cursor: 'pointer', fontSize: "0.8125em", background: 'white' }}>
                                View All
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoCard;
