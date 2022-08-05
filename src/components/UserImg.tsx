import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { fetchImgs, setImgPage } from "../store/action-creators/img";

const UserImg: React.FC = () => {
    const { page, limit, imgs, error, loading } = useTypedSelector(state => state.img)
    const { fetchImgs, setImgPage } = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchImgs(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {imgs.map(img =>
                <div key={img.id}><img src={img.url}></img></div>
            )}
            <div style={{ display: "flex" }}>
                {pages.map(p =>
                    <div
                        key={p}
                        onClick={() => setImgPage}
                        style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserImg;