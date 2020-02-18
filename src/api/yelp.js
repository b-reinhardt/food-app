import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer RH6VO_hMts2LxagD18P0E60u1X7Dmm4sjgUkrxeDxWc6lpXLAcnQ4OyNZsppvpgIA2StCS-ihkoeLTyViG5_IrMq4cCIQd0JgEM_rKSlV2rC1ndussla9GcucmRJXnYx"
  }
});
