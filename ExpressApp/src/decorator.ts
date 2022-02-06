function Component(newId: number) {
	console.log(newId, 'Component ');
	return function (target: Function) {
		target.prototype.id = newId;
	};
}

function Logger(target: Function) {
	console.log(target.name);
}

function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
	console.log(propertyKey);
	const oldValue = propertyDescriptor.value;
	propertyDescriptor.value = function (...args: any[]) {
		return args[0] * 20;
	};
}

function Props(target: Object, propertyKey: string) {
	let value: number;

	const getter = () => {
		console.log('Getter');
		return value;
	};

	const setter = (newValue: number) => {
		console.log('Set');
		value = newValue;
	};

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
	});
}

function Param(target: Object, propertyKey: string, index: number) {
	console.log(propertyKey, index);
}

@Logger
@Component(1)
export class User {
	@Props
	id!: number;

	@Method
	updatedId(@Param newId: number) {
		this.id = newId;
		return this.id;
	}
}

console.log(new User().updatedId(10), new User().id);

interface IOutput {
	print: (message: string) => void;
}

class CliOutput implements IOutput {
	public print(message: string): void {
		process.stdout.write(message);
	}
}

class Dog {
	constructor(private output: IOutput) {}

	bark(message: string) {
		this.output.print(message);
	}
}

const cli: CliOutput = new CliOutput();
new Dog(cli).bark('bow-bow');
