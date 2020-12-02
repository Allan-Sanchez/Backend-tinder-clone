import Card from "../models/card.model"

export const getCards =async (req,res) =>{
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({message:error})
    }
};

export const createCard = async (req, res) =>{
    const {name,imgUrl} = req.body;

    try {
    const newCard = new Card({name,imgUrl});
    const cardSaved = await newCard.save();
    
    res.status(201).json(cardSaved)
    } catch (error) {
        res.status(500).json(error.message);       
    }
}

export const deleteCard = async (req,res) =>{
    const{cardId} = req.params;
    try {
        await Card.findByIdAndDelete(cardId);
    } catch (error) {
        res.status(404).json(error.message)
    }
}