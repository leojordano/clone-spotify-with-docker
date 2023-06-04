import styled from "styled-components";
import { FaPlay } from 'react-icons/fa'
interface IPlaylist {
    Image: string
    Name: string
    Description: string
}

const SPlaylist = styled.div`
    background-color: ${({theme}) => theme.black}80;
    border-radius: ${({theme}) => theme.radius};
    padding: 12px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    cursor: pointer;
    
    img {
        width: 100%;
        object-fit: cover;
        border-radius: ${({theme}) => theme.radius};
    }

    h3 {
        font-size: 14px;
    }

    p {
        font-size: 12px;
        color: ${({theme}) => theme.white}80;
    }

    .play-icon {
        position: absolute;
        right: 15px;
        bottom: 5px;
        background-color: ${({theme}) => theme.green};
        padding: 15px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.black};
        opacity: 0;
        transition: all .5s;
    }

    &:hover {
        .play-icon {
            opacity: 1;
            bottom: 10px;
        }
    }
`

export const Playlist = ({ Name, Image, Description }: IPlaylist) => {
    return (
        <SPlaylist>
            <img src={Image} alt={Name} />
            <h3>{Name}</h3>
            <p>{Description}</p>
            <span className="play-icon"><FaPlay /></span>
        </SPlaylist>
     );
}
