import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

// Галерея приміщення: головне фото + мініатюри, клік — перегляд на весь екран.
const RoomGallery = ({ photos, title }) => {
    const [index, setIndex] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const count = photos.length;

    const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

    // Клавіатура в повноекранному режимі
    useEffect(() => {
        if (!fullscreen) return;
        const onKey = (e) => {
            if (e.key === "Escape") setFullscreen(false);
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [fullscreen, prev, next]);

    if (!count) return null;

    return (
        <div className="room-gallery">
            <div className="room-gallery__main">
                <button
                    type="button"
                    className="room-gallery__open"
                    onClick={() => setFullscreen(true)}
                    aria-label="Відкрити фото на весь екран"
                >
                    <img src={photos[index]} alt={`${title} — фото ${index + 1}`} />
                    <span className="room-gallery__expand"><Expand size={18} aria-hidden="true" /></span>
                </button>

                {count > 1 && (
                    <>
                        <button type="button" className="room-gallery__nav is-prev" onClick={prev} aria-label="Попереднє фото">
                            <ChevronLeft size={24} aria-hidden="true" />
                        </button>
                        <button type="button" className="room-gallery__nav is-next" onClick={next} aria-label="Наступне фото">
                            <ChevronRight size={24} aria-hidden="true" />
                        </button>
                        <span className="room-gallery__counter">{index + 1} / {count}</span>
                    </>
                )}
            </div>

            {count > 1 && (
                <div className="room-gallery__thumbs">
                    {photos.map((src, i) => (
                        <button
                            type="button"
                            key={src}
                            className={i === index ? "is-active" : ""}
                            onClick={() => setIndex(i)}
                            aria-label={`Фото ${i + 1}`}
                        >
                            <img src={src} alt="" loading="lazy" />
                        </button>
                    ))}
                </div>
            )}

            {fullscreen && (
                <div className="room-gallery__lightbox" onClick={() => setFullscreen(false)} role="dialog" aria-label={title}>
                    <img src={photos[index]} alt={`${title} — фото ${index + 1}`} onClick={(e) => e.stopPropagation()} />
                    <button type="button" className="room-gallery__close" aria-label="Закрити">
                        <X size={28} aria-hidden="true" />
                    </button>
                    {count > 1 && (
                        <>
                            <button type="button" className="room-gallery__nav is-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Попереднє фото">
                                <ChevronLeft size={32} aria-hidden="true" />
                            </button>
                            <button type="button" className="room-gallery__nav is-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Наступне фото">
                                <ChevronRight size={32} aria-hidden="true" />
                            </button>
                            <span className="room-gallery__counter">{index + 1} / {count}</span>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default RoomGallery;
