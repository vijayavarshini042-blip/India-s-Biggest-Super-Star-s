const DEMO_USER = "Varshini";
const DEMO_PASSWORD = "12345";

const starterRecipes = [
  {id:"r1",name:"Avocado Garden Bowl",category:"Lunch",time:15,servings:2,diet:"Vegan",rating:4.9,ratings:128,description:"Creamy avocado, crunchy greens and a bright lemon dressing.",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",ingredients:["1 ripe avocado","2 cups mixed greens","1 cup cherry tomatoes","½ cucumber","1 tbsp olive oil","1 tbsp lemon juice","Salt and black pepper"],instructions:["Wash and dry the greens. Halve the cherry tomatoes and slice the cucumber.","Cut the avocado in half, remove the pit and slice the flesh.","Whisk olive oil, lemon juice, salt and pepper in a small bowl.","Toss the greens, tomatoes and cucumber with the dressing. Top with avocado and serve."],author:"India's Biggest Super Star's kitchen"},
  {id:"r2",name:"Creamy Tomato Pasta",category:"Dinner",time:25,servings:2,diet:"Vegetarian",rating:4.8,ratings:96,description:"Silky tomato sauce, fresh basil and a little parmesan magic.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",ingredients:["200 g pasta","2 tbsp olive oil","3 garlic cloves, minced","1 cup crushed tomatoes","¼ cup cream","Fresh basil","Parmesan, to serve","Salt and pepper"],instructions:["Bring salted water to a boil and cook pasta until just al dente. Reserve a cup of pasta water.","Warm olive oil in a pan. Add garlic and cook gently until fragrant.","Add crushed tomatoes and simmer for 8 minutes. Stir in cream and season.","Toss pasta through the sauce, loosening with a splash of pasta water. Finish with basil and parmesan."],author:"India's Biggest Super Star's kitchen"},
  {id:"r3",name:"Berry Breakfast Stack",category:"Breakfast",time:10,servings:1,diet:"Vegetarian",rating:4.7,ratings:74,description:"Fluffy pancakes with fresh berries and a drizzle of maple.",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",ingredients:["½ cup all-purpose flour","½ cup milk","1 egg","1 tsp baking powder","1 tsp maple syrup","½ cup mixed berries","Butter for the pan"],instructions:["Whisk flour and baking powder in a bowl. Add milk and egg and mix until just combined.","Heat a lightly buttered pan over medium heat.","Pour small rounds of batter into the pan. Flip when bubbles appear and cook until golden.","Stack pancakes and top with berries and maple syrup."],author:"India's Biggest Super Star's kitchen"},
  {id:"r4",name:"Golden Chickpea Crunch",category:"Snacks",time:30,servings:3,diet:"Vegan",rating:4.8,ratings:83,description:"Crispy spiced chickpeas for a seriously snackable moment.",image:"https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1000&q=85",ingredients:["1 can chickpeas, drained","1 tbsp olive oil","½ tsp paprika","½ tsp cumin","¼ tsp garlic powder","Salt to taste"],instructions:["Heat oven to 200°C (400°F). Rinse chickpeas and pat very dry.","Toss chickpeas with olive oil, paprika, cumin, garlic powder and salt.","Spread on a baking tray in one layer.","Roast for 25–30 minutes, shaking the tray halfway, until crisp. Cool slightly before eating."],author:"India's Biggest Super Star's kitchen"},
  {id:"r5",name:"Mango Coconut Pudding",category:"Dessert",time:15,servings:4,diet:"Vegan",rating:4.9,ratings:112,description:"A sunny, silky mango dessert with tropical coconut notes.",image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",ingredients:["2 ripe mangoes","1 cup coconut milk","2 tbsp chia seeds","1 tbsp maple syrup","Lime zest","Toasted coconut, to finish"],instructions:["Blend mango flesh with coconut milk and maple syrup until smooth.","Stir chia seeds into the mango mixture and let sit for 5 minutes.","Divide into small glasses and chill for at least 2 hours until set.","Finish with lime zest and toasted coconut before serving."],author:"India's Biggest Super Star's kitchen"},
  {id:"r6",name:"Herby Lemon Rice",category:"Lunch",time:20,servings:2,diet:"Gluten-free",rating:4.6,ratings:61,description:"Bright, fluffy rice with herbs, lemon and toasted cashews.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",ingredients:["1 cup basmati rice","1 tbsp oil","½ tsp mustard seeds","8 curry leaves","¼ cup cashews","1 lemon","2 tbsp chopped coriander","Salt to taste"],instructions:["Rinse rice and cook until fluffy. Let it cool slightly so the grains stay separate.","Heat oil in a pan. Add mustard seeds, curry leaves and cashews; stir until fragrant.","Add cooked rice, salt and lemon juice. Fold gently to combine.","Finish with lemon zest and chopped coriander. Taste and adjust seasoning."],author:"India's Biggest Super Star's kitchen"},
  {id:"r7",name:"Smoky Bean Tacos",category:"Dinner",time:25,servings:2,diet:"Vegan",rating:4.8,ratings:91,description:"Warm tortillas packed with smoky beans and fresh crunchy salsa.",image:"https://images.unsplash.com/photo-1551508486-9d5f4e0a4e8e?auto=format&fit=crop&w=1000&q=85",ingredients:["1 can black beans, drained","1 tsp smoked paprika","½ tsp cumin","4 small tortillas","1 tomato, diced","¼ red onion, diced","Lime wedges","Fresh coriander"],instructions:["Warm beans in a pan with paprika, cumin and a splash of water for 5 minutes.","Mix tomato, red onion, coriander and lime juice to make a quick salsa.","Warm tortillas in a dry pan until soft and lightly toasted.","Fill tortillas with smoky beans and salsa. Serve with lime wedges."],author:"India's Biggest Super Star's kitchen"},
  {id:"r8",name:"Green Goddess Toast",category:"Breakfast",time:8,servings:1,diet:"Vegetarian",rating:4.7,ratings:54,description:"Crisp sourdough topped with creamy herbed yogurt and greens.",image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",ingredients:["2 slices sourdough","¼ cup thick yogurt","1 tbsp chopped herbs","½ avocado","A handful of baby spinach","½ lemon","Chilli flakes"],instructions:["Toast sourdough until crisp and golden.","Mix yogurt with chopped herbs, lemon zest, lemon juice, salt and pepper.","Spread herby yogurt over the toast.","Top with sliced avocado, spinach and chilli flakes. Serve straight away."],author:"India's Biggest Super Star's kitchen"},
  {id:"r9",name:"Roasted Veggie Plate",category:"Lunch",time:35,servings:2,diet:"Gluten-free",rating:4.8,ratings:69,description:"Caramelized seasonal vegetables with a tangy tahini drizzle.",image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",ingredients:["1 sweet potato","1 red pepper","1 zucchini","1 tbsp olive oil","2 tbsp tahini","1 tbsp lemon juice","1 tbsp water","Salt and pepper"],instructions:["Heat oven to 210°C (410°F). Chop vegetables into similar-sized pieces.","Toss with olive oil, salt and pepper. Roast for 25–30 minutes, turning once.","Whisk tahini, lemon juice and water until creamy. Add more water if needed.","Arrange roasted vegetables on a plate and drizzle with tahini sauce."],author:"India's Biggest Super Star's kitchen"}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
let recipes = [];
let savedIds = [];
let ratingsById = {};
let activeCategory = "All";
let activeView = "discover";
let searchTerm = "";
let diet = "all";
let cookTime = "all";
let currentRecipeId = null;
let toastTimer;

function loadData(){
  try { savedIds = JSON.parse(localStorage.getItem("India's Biggest Super Star's_saved") || "[]"); } catch { savedIds = []; }
  try { ratingsById = JSON.parse(localStorage.getItem("India's Biggest Super Star's_ratings") || "{}"); } catch { ratingsById = {}; }
  try {
    const userRecipes = JSON.parse(localStorage.getItem("India's Biggest Super Star's_user_recipes") || "[]");
    recipes = [...starterRecipes, ...userRecipes];
  } catch { recipes = [...starterRecipes]; }
}
function saveLocal(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function safeText(value=""){ return String(value).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function showToast(message){
  const toast=$("#toast"); toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function setLoggedIn(value){
  $("#loginScreen").classList.toggle("hidden", value);
  $("#app").classList.toggle("hidden", !value);
  if(value){ loadData(); render(); }
}
$("#loginForm").addEventListener("submit", e=>{
  e.preventDefault();
  const username=$("#username").value.trim(), password=$("#password").value;
  if(username===DEMO_USER && password===DEMO_PASSWORD){
    $("#loginError").textContent="";
    sessionStorage.setItem("India's Biggest Super Star's_logged_in","yes");
    setLoggedIn(true);
  } else {
    $("#loginError").textContent="That login doesn't match. Try username 1234 and password 12345.";
  }
});
$("#togglePassword").addEventListener("click",()=>{
  const input=$("#password"); const show=input.type==="password";
  input.type=show?"text":"password"; $("#togglePassword").textContent=show?"Hide":"Show";
});
$("#logoutBtn").addEventListener("click",()=>{sessionStorage.removeItem("India's Biggest Super Star's_logged_in");setLoggedIn(false);$("#password").value="";showToast("You've signed out.");});
$("#headerSaved").addEventListener("click",()=>setView("saved"));
$("#addRecipeBtn").addEventListener("click",openAddModal);
$("#emptyAddBtn").addEventListener("click",openAddModal);
$("#clearCategory").addEventListener("click",()=>{activeCategory="All";$$(".category").forEach(b=>b.classList.toggle("active",b.dataset.category==="All"));render();});
$$(".nav-item").forEach(button=>button.addEventListener("click",()=>setView(button.dataset.view)));
$$(".category").forEach(button=>button.addEventListener("click",()=>{
  activeCategory=button.dataset.category;
  $$(".category").forEach(b=>b.classList.toggle("active",b===button));
  render();
}));
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();render();});
$("#dietFilter").addEventListener("change",e=>{diet=e.target.value;render();});
$("#timeFilter").addEventListener("change",e=>{cookTime=e.target.value;render();});
document.addEventListener("keydown",e=>{
  if(e.key==="/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName) && !$("#app").classList.contains("hidden")){e.preventDefault();$("#searchInput").focus();}
  if(e.key==="Escape") $$(".modal-backdrop").forEach(m=>m.classList.add("hidden"));
});
$$("[data-close]").forEach(btn=>btn.addEventListener("click",()=>$("#"+btn.dataset.close).classList.add("hidden")));
$$(".modal-backdrop").forEach(backdrop=>backdrop.addEventListener("click",e=>{if(e.target===backdrop)backdrop.classList.add("hidden");}));

function setView(view){
  activeView=view;
  $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  const details={
    discover:["DISCOVER","What sounds <em>good</em> today?","A little inspiration for whatever you're craving.","HANDPICKED FOR YOU","Recipes worth a repeat"],
    saved:["SAVED RECIPES","Your little <em>love list.</em>","All the recipes you’ve bookmarked, in one tasty place.","YOUR PERSONAL COLLECTION","Saved for another day"],
    myrecipes:["MY RECIPES","Made by <em>you.</em>","Your own creations, ready for another round.","FROM YOUR KITCHEN","Your recipes"]
  }[view];
  $("#pageLabel").textContent=details[0];$("#pageTitle").innerHTML=details[1];$("#pageSubtitle").textContent=details[2];$("#recipeEyebrow").textContent=details[3];$("#recipeHeading").textContent=details[4];
  $("#categorySection").classList.toggle("hidden",view!=="discover");
  render();
}
function getVisibleRecipes(){
  let list=[...recipes];
  if(activeView==="saved") list=list.filter(r=>savedIds.includes(r.id));
  if(activeView==="myrecipes") list=list.filter(r=>r.author==="You");
  if(activeView==="discover" && activeCategory!=="All") list=list.filter(r=>r.category===activeCategory);
  if(searchTerm) list=list.filter(r=>[r.name,r.description,r.category,r.diet,...r.ingredients].join(" ").toLowerCase().includes(searchTerm));
  if(diet!=="all") list=list.filter(r=>r.diet===diet || r.diet==="Everything");
  if(cookTime!=="all") list=list.filter(r=>r.time<=Number(cookTime));
  return list;
}
function render(){
  const list=getVisibleRecipes();
  $("#recipeGrid").innerHTML=list.map(recipeCard).join("");
  $("#resultCount").textContent=`${list.length} ${list.length===1?"recipe":"recipes"}`;
  $("#emptyState").classList.toggle("hidden",list.length!==0);
  $("#recipeGrid").classList.toggle("hidden",list.length===0);
  $("#savedCount").textContent=savedIds.length;
  $$(".favorite-btn[data-id]").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();toggleSaved(btn.dataset.id);}));
  $$(".recipe-card").forEach(card=>card.addEventListener("click",()=>openRecipe(card.dataset.id)));
  $$(".view-recipe").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();openRecipe(btn.dataset.id);}));
}
function recipeCard(r){
  const isSaved=savedIds.includes(r.id);
  const rating=ratingsById[r.id]||r.rating||"New";
  return `<article class="recipe-card" data-id="${safeText(r.id)}" tabindex="0" role="button" aria-label="View ${safeText(r.name)}">
    <div class="recipe-image" style="background-image:url('${safeText(r.image||"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80")}')">
      <span class="recipe-badge">${safeText(r.category.toUpperCase())}</span>
      <button class="favorite-btn ${isSaved?"saved":""}" data-id="${safeText(r.id)}" aria-label="${isSaved?"Remove from":"Add to"} saved recipes">${isSaved?"♥":"♡"}</button>
    </div>
    <div class="card-body"><div class="card-topline"><span>${safeText(r.diet||"Home cooked")}</span><span class="rating">★ ${rating}</span></div>
      <h3 title="${safeText(r.name)}">${safeText(r.name)}</h3><p class="card-description">${safeText(r.description||"A delicious recipe to make at home.")}</p>
      <div class="card-bottom"><div class="recipe-meta"><span>◷ ${r.time} min</span><span>♧ ${r.servings} servings</span></div><button class="view-recipe" data-id="${safeText(r.id)}">Get recipe ↗</button></div>
    </div></article>`;
}
function toggleSaved(id){
  if(savedIds.includes(id)){savedIds=savedIds.filter(x=>x!==id);showToast("Removed from your saved recipes.");}
  else {savedIds.push(id);showToast("Saved! A little recipe for later.");}
  saveLocal("India's Biggest Super Star's_saved",savedIds);render();
  if(currentRecipeId===id && !$("#recipeModal").classList.contains("hidden")) openRecipe(id);
}
function openRecipe(id){
  const r=recipes.find(x=>x.id===id);if(!r)return;currentRecipeId=id;
  const isSaved=savedIds.includes(id), rating=ratingsById[id]||r.rating||0;
  $("#recipeDetail").innerHTML=`
    <div class="detail-hero" style="background-image:url('${safeText(r.image||"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80")}')"></div>
    <div class="detail-top"><span>${safeText(r.category.toUpperCase())}</span><span>•</span><span>${safeText(r.diet||"Home cooked")}</span><span>•</span><span class="rating">★ ${rating||"Not rated"}</span></div>
    <div class="detail-title-row"><h2 id="detailTitle">${safeText(r.name)}</h2><button class="favorite-btn ${isSaved?"saved":""}" id="detailFavorite" aria-label="Save recipe">${isSaved?"♥":"♡"}</button></div>
    <p class="detail-description">${safeText(r.description||"A delicious recipe to make at home.")}</p>
    <div class="detail-stats"><span>◷ ${r.time} minutes</span><span>♧ ${r.servings} servings</span><span>★ ${r.ratings||0} community ratings</span></div>
    <div class="detail-columns"><section><h3>Ingredients</h3><ul class="ingredients">${(r.ingredients||[]).map((item,i)=>`<li><input type="checkbox" id="ingredient${i}"><label for="ingredient${i}">${safeText(item)}</label></li>`).join("")}</ul></section>
    <section><h3>Let's make it</h3><ol class="steps">${(r.instructions||[]).map((step,i)=>`<li><span class="step-num">${i+1}</span><span>${safeText(step)}</span></li>`).join("")}</ol></section></div>
    <div class="rate-row"><strong>Made it? Rate this recipe</strong><div class="stars" aria-label="Rate this recipe">${[1,2,3,4,5].map(n=>`<button type="button" data-rating="${n}" class="${Number(rating)>=n?"chosen":""}" aria-label="${n} stars">★</button>`).join("")}</div></div>`;
  $("#recipeModal").classList.remove("hidden");
  $("#detailFavorite").addEventListener("click",()=>toggleSaved(id));
  $$(".stars button",$("#recipeDetail")).forEach(btn=>btn.addEventListener("click",()=>{
    ratingsById[id]=Number(btn.dataset.rating);saveLocal("India's Biggest Super Star's_ratings",ratingsById);
    const recipe=recipes.find(x=>x.id===id);if(recipe)recipe.rating=ratingsById[id];
    showToast(`Thanks for rating ${r.name}!`);openRecipe(id);render();
  }));
}
function openAddModal(){
  $("#addError").textContent="";$("#addRecipeForm").reset();$("#addModal").classList.remove("hidden");
}
$("#addRecipeForm").addEventListener("submit",e=>{
  e.preventDefault();const form=new FormData(e.currentTarget);
  const name=String(form.get("name")||"").trim();
  const ingredients=String(form.get("ingredients")||"").split(",").map(x=>x.trim()).filter(Boolean);
  const instructions=String(form.get("instructions")||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
  if(!name||ingredients.length===0||instructions.length===0){$("#addError").textContent="Please add a recipe name, ingredients, and instructions.";return;}
  const image=String(form.get("image")||"").trim();
  const recipe={id:"user-"+Date.now(),name,category:String(form.get("category")),time:Number(form.get("time")),servings:Number(form.get("servings")),diet:String(form.get("diet")),rating:"New",ratings:0,description:`A home-cooked ${String(form.get("category")).toLowerCase()} recipe shared by you.`,image:image||"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",ingredients,instructions,author:"You"};
  const userRecipes=recipes.filter(r=>r.author==="You");userRecipes.push(recipe);saveLocal("India's Biggest Super Star's_user_recipes",userRecipes);
  recipes=[...starterRecipes,...userRecipes];$("#addModal").classList.add("hidden");setView("myrecipes");showToast("Your recipe is now in My recipes!");
});
if(sessionStorage.getItem("India's Biggest Super Star's_logged_in")==="yes") setLoggedIn(true);
else setLoggedIn(false);
