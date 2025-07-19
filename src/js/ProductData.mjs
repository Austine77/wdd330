const products = [
  { id: "344YJ", brand: "Cedar Ridge", name: "Rimrock Tent", image: "../images/tents/cedar-ridge.jpg", price: 69.99, color: "Rust/Clay", description: "Lightweight shelter with rain-fly." },
  { id: "880RT", brand: "Mountainsmith", name: "Morrison Evo Tent", image: "../images/tents/mountainsmith.jpg", price: 129.95, color: "Grey/Yellow", description: "Two-door, two-vestibule design." },
  { id: "726YH", brand: "Kelty", name: "Late Start Tent", image: "../images/tents/kelty.jpg", price: 139.95, color: "Orange/Gray", description: "Freestanding, good materials." },
  { id: "234JK", brand: "Big Agnes", name: "Copper Spur HV UL2", image: "../images/tents/big-agnes.jpg", price: 449.95, color: "Olive Green", description: "Ultralight and breathable." },
  { id: "975PL", brand: "REI Co-op", name: "Half Dome SL 2+", image: "../images/tents/rei-half-dome.jpg", price: 329.00, color: "Ash/Navy", description: "Extra space and durable." },
  // 11 additional product examples:
  { id: "A001", brand: "North Face", name: "Stormbreak 2", image: "../images/tents/stormbreak2.jpg", price: 199.00, color: "Red/Black", description: "Budget-friendly 3-season tent." },
  { id: "A002", brand: "MSR", name: "Hubba Hubba NX", image: "../images/tents/hubba-hubba.jpg", price: 399.00, color: "Blue", description: "Lightweight backpacking tent." },
  { id: "A003", brand: "Hilleberg", name: "Saivo 2", image: "../images/tents/saivo.jpg", price: 1000.00, color: "Yellow", description: "Four-season shelter." },
  { id: "A004", brand: "Black Diamond", name: "FirstLight", image: "../images/tents/firstlight.jpg", price: 299.95, color: "Green", description: "Fast pitch shelter." },
  { id: "A005", brand: "Sierra Designs", name: "Backpacker Elite", image: "../images/tents/backpacker-elite.jpg", price: 259.00, color: "Orange", description: "Spacious and light." },
  { id: "A006", brand: "Coleman", name: "Sundome 2", image: "../images/tents/sundome2.jpg", price: 59.99, color: "Blue", description: "Affordable camping tent." },
  { id: "A007", brand: "REI Co-op", name: "Trailhawk 2", image: "../images/tents/trailhawk.jpg", price: 229.00, color: "Green", description: "All-around 3-season tent." },
  { id: "A008", brand: "Nemo", name: "Dagger 2", image: "../images/tents/dagger.jpg", price: 379.95, color: "Teal", description: "Trekking pole hub tent." },
  { id: "A009", brand: "Zpack-s", name: "Duplex", image: "../images/tents/duplex.jpg", price: 549.00, color: "Gray", description: "Ultralight shelter." },
  { id: "A010", brand: "Tarptent", name: "ProTrail", image: "../images/tents/protrail.jpg", price: 349.00, color: "Orange", description: "Single trekking pole tent." },
  { id: "A011", brand: "Marmot", name: "Limelight 3P", image: "../images/tents/limelight3p.jpg", price: 399.00, color: "Gray/Blue", description: "Roomy 3P tent." },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export default products;
