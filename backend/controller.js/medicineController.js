const Medicine = require('../model/medicine')

exports.addMedice = async(req, res, next) => {
    const data =await Medicine.create({name,price,description,stock}) 
    return res.status(201).json({
        message: 'Medicine added successfully',
        data
    })
}

exports.getAllMedicine =async (req, res, next) => {
   const data =await Medicine.find();
   return res.status(200).json({
       message: 'Medicine fetched successfully',
       data
   })
}
exports.updateMedicine = async(req, res, next) => {
    const {id} = req.params;
    const med = await Medicine.findById(id);
    const {name,price,description,stock } = med;
    const data = await Medicine.findByIdAndUpdate(
        id,
        {
          $set: {
            name,
            price,
            description,
            stock: `${parseInt(stock) - 1 }`
          },
        },
        { new: true }
      );
      
      return res.status(200).json({
        message: 'Medicine updated successfully',
        data,
      });
}