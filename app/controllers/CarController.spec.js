const { Task } = require("../models");
const CarController = require("./CarController");

describe("CarController", () => {
  describe("#handleCreateCar", () => {
    test("should call res.status(201) and res.json with task instance", async () => {
        const name = 'mobil jelek';
        const price = 100000;
        const size = 'Classic';
        const image =  'mobil.jpg';
        const isCurrentlyRented = true;

      const mockRequest = {
        body: {
            name,
            price,
            size,
            image,
            isCurrentlyRented,
        },
      };

      const task = new Task({ name, price, size, image, isCurrentlyRented });
      const mockTaskModel = { create: jest.fn().mockReturnValue(task) };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const taskController = new CarController({ taskModel: mockTaskModel });

      await taskController.handleCreateCar(mockRequest, mockResponse);

      expect(mockTaskModel.create).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(task);
    });

    test("should call res.status(422) and res.json with task instance", async () => {
      const err = new Error("Something");
      const name = 'mobil jelek';
      const price = 100000;
      const size = 'Classic';
      const image =  'mobil.jpg';
      const isCurrentlyRented = true;

      const mockRequest = {
        body: {
            name,
            price,
            size,
            image,
            isCurrentlyRented,
        },
      };

      const mockTaskModel = {
        create: jest.fn().mockReturnValue(Promise.reject(err)),
      };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const taskController = new CarController({ taskModel: mockTaskModel });

      await taskController.handleCreateCar(mockRequest, mockResponse);

      expect(mockTaskModel.create).toHaveBeenCalledWith({
            name,
            price,
            size,
            image,
            isCurrentlyRented,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          price: err.price,
          size: err.size,
          image: err.image,
          isCurrentlyRented: err.isCurrentlyRented,
          message: err.message,
        },
      });
    });
  });
});
