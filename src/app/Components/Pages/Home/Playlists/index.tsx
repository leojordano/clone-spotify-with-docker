import styled from "styled-components";

interface IPlaylist {
    Image: string
    Name: string
    Description: string
}

const SPlaylist = styled.div`
    background-color: ${({theme}) => theme.colors.lightBlack};
    border-radius: ${({theme}) => theme.radius};
    padding: 12px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
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
        color: ${({theme}) => theme.colors.white}80;
    }
`

export const Playlist = ({ Name, Image, Description }: IPlaylist) => {
    return (
        <SPlaylist>
            <img src={Image} alt={Name} />
            <h3>{Name}</h3>
            <p>{Description}</p>
        </SPlaylist>
     );
}
