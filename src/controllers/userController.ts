

/* GET home page. */
import {NextFunction, Request, Response} from "express";
import mongoose from "mongoose";



export const userRegistration = async (req: Request, res: Response, next:NextFunction)=> {

  const { username, email, password } = req.body
  
  let User = mongoose.model("User")
  let newUser  = new User({
    username: username,
    email: email,
    password: password,
  })
  
  try{
    await newUser.validate();
    let result: any = await newUser.save()
    
    let {password, ...other}= result
    res.json(other)
    
    
  } catch (error){

    let errors = {}
  
    if (error.name === "ValidationError") {
      let errors = {};
  
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
  
      return res.status(409).json({message: "", errors: errors})
    }
    res.status(500).send("Something went wrong");
  }
  
  
  // newPost = await newPost.save()
  // console.log(newPost)
  
  
  
  //   client = await connectDB()
  //
  //   let re =  await client.execute("SELECT * from question.categories")
  //   const categories = re.rows
  //
  //   re =  await client.execute("SELECT slug, category_slug, title from question.questions")
  //   // console.log(re.rows)
  //   let catWithPost = {}
  //   re.rows.forEach(post=>{
  //     categories.findIndex(cat=>{
  //       if(cat.slug === post.category_slug){
  //         if(catWithPost[cat.slug]){
  //           catWithPost[cat.slug] = [
  //             ...catWithPost[cat.slug],
  //             post
  //           ]
  //         } else {
  //           catWithPost[cat.slug] = [post]
  //         }
  //       }
  //     })
  //
  //   })
  //
  //
  //   // catWithPost {
  //   //   nodejs: [ Row { slug: 'asd', category_slug: 'nodejs', title: 'asd' } ]
  //   // }
  //
  //   return res.render('index', {
  //     title: 'Javascript-refresh',
  //     posts: null,
  //     html: false,
  //     categories: categories,
  //     sidebarData: catWithPost
  //   });
  //
  //
  // } catch (ex){
  //   return res.render('index', {
  //     title: 'Javascript-refresh',
  //     posts: null,
  //     html: false,
  //     categories: null,
  //     sidebarData: null
  //   });
  //
  // } finally {
  //   client?.shutdown()
  // }
  
  // let n = os.networkInterfaces()
  //
  // try {
  //   // let c = await connectDBB()
  //
  //   let p = path.resolve("../dist")
  //   readdir("dist").then(r=>{
  //     res.json({
  //       r,
  //       z:getTimeZone(),
  //       ip: ip.address(),
  //       connect: true
  //     })
  //   }).catch(ex=>{
  //     console.log(ex)
  //   })
  //
  //
  //   // res.json({
  //   //   z:getTimeZone(),
  //   //   ip: ip.address(),
  //   //   connect: true
  //   // })
  //   // console.log(c)
  // } catch (ex){
  //   console.log(ex)
  //   res.json({z:getTimeZone(),
  //     ip: ip.address(),
  //     ex: ex
  //   })
  //
  //
  // }
  
}

