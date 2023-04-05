import axios from 'axios'

export const getCarList = async ()=>{
    const car= await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car/`);
    // console.log({carList:car})
    return car.data.cars
}

export const searchCar= async(q)=>{
    const search = await axios.get(q)
    return
}