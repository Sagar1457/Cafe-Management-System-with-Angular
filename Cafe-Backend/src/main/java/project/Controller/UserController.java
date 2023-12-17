package project.Controller;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import project.Entity.Cart;
import project.Entity.Category;
import project.Entity.Products;
import project.Entity.Users;
import project.ServiceImp.CartServiceImp;
import project.ServiceImp.CategoryServiceImp;
import project.ServiceImp.ProductServiceImp;
import project.ServiceImp.UserServiceImp;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserServiceImp userservice;
	
	@Autowired
	private ProductServiceImp productservice;
	
	@Autowired
	private CategoryServiceImp categoryservice;
	
	@Autowired
	private CartServiceImp cartservice;

	@PostMapping("/login")
	public Users validate(@RequestBody Users user) throws ServletException
	{
		//String jwtToken="";
		if(user.getUsername()==null || user.getPassword()==null)
		{
			throw new ServletException("Please fill in username and password");
		}
		String username=user.getUsername();
		String password=user.getPassword();
		user=userservice.login(username, password);
		
		if(user==null)
		{
			throw new ServletException("User not found");
		}
	/*	jwtToken= Jwts.builder()
				.claim("user",user.getUsername())
				.claim("role", user.getRole())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000 * 60 * 60 * 10 ))
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		return jwtToken;*/
		return user;
	}
	
	@PostMapping("/newregistration")
	public Users newuser(@RequestBody Users user) {
		return userservice.newuser(user);
	}
	
	@PutMapping("/updateuser/{id}")
	public Users updateuser(@PathVariable Long id,@RequestBody Users user) {
		return userservice.updateuser(id, user);
	}
	
	@PostMapping("/products/{productId}/{cartId}")
	public Cart addProductToCart(@RequestParam Long  productId,@RequestParam Long cartId) {
		return productservice.addProductToCart(productId, cartId);
	}
	
	@GetMapping("/categories")
	public List<Category> getallcategory(){
		return categoryservice.getallcategory();
	}
	
	@GetMapping("/products")
	public List<Products> getallproduct(){
		return productservice.getallproduct();
	}
	
	@GetMapping("/products/{name}")
	public Products getByname(@PathVariable String name){
		return productservice.findByProductName(name);
	}
	
	@GetMapping("products/category/{name}")
	public Collection<Products> getBycategory(@PathVariable String name){
		return productservice.findByCategory(name);
	}
	
	@GetMapping("/cart/{id}")
	public Cart getcartByid(@PathVariable Long id){
		return cartservice.getUsercartById(id);
		
	}
	
}

