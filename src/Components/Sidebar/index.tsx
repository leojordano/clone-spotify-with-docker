import React from "react"
import { HiHome, HiOutlineSearch, HiViewList } from "react-icons/hi"

import { Icon } from '../../@styles/SIcon.tsx'
import { SContainer, SGroupContainer, SImage } from "./styles.tsx"
import { theme } from "@/src/theme.ts"

export const Sidebar = () => {
    return (
        <SContainer>
            <SGroupContainer>
                <Icon size="32px" icon={<HiHome />} />
                <Icon size="28px" icon={<HiOutlineSearch />} />
            </SGroupContainer>
            <SGroupContainer>
                <Icon size="32px" icon={<HiViewList />} />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
                <SImage src="http://placekitten.com/80/80" />
            </SGroupContainer>
        </SContainer>
    )
}