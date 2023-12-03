import { useContext, useState, createContext } from "react";


export const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);


export const GlobalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);
    const [modalPosition, setModalPosition] = useState(36);
    

    const toggleModal = (e) => {
        const y = e.pageY;
        setModalPosition(y);
        setIsOpen(!isOpen);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleCrntSection = (name) => {
        setCurrentSection(name)
    }

    const valueGlobalProvider = {
        isOpen,
        closeModal,
        toggleModal,
        currentSection,
        handleCrntSection,
        modalPosition
    }

    return (
        <GlobalContext.Provider value={valueGlobalProvider}>
            {children}
        </GlobalContext.Provider>
    )
}