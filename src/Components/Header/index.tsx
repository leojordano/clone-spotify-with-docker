import React from "react"
import { MdArrowBackIosNew, MdArrowForwardIos, MdPeopleAlt } from "react-icons/md"
import { FaUser } from 'react-icons/fa'

import { Flex } from '../../@styles/SFlex'
import { SHeader } from './styles.tsx'
import { Icon } from "@/src/@styles/SIcon"

export const Header = () => {
    return (
        <SHeader>
            <Flex gap="12px">
                <Icon size="18px" icon={<MdArrowBackIosNew />} />
                <Icon size="18px" icon={<MdArrowForwardIos />} />
            </Flex>

            <Flex gap="12px">
                <Icon size="18px" icon={<MdPeopleAlt />} />
                <Icon size="18px" icon={<FaUser />} />
            </Flex>
        </SHeader>
    )
}