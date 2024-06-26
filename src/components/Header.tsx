import {
	Group,
	Button,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link } from "react-router-dom";

export function NavBar() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const cart = useSelector((state: RootState) => state.cart);
	let totalQuantity = 0;
	cart.items.map((item) => {
		totalQuantity += item.quantity;
		return totalQuantity;
	});
	return (
		<Box pb={120}>
			<header className={classes.header}>
				<Group justify="space-between" h="100%">
					<Group h="100%" gap={0} visibleFrom="sm">
						<Link
							to={"/shop"}
							className={classes.link}
							style={{
								fontSize: "1.4rem",
								color: "#7a120a",
							}}
						>
							WineShop
						</Link>
					</Group>

					<Group visibleFrom="sm">
						<Link to={"/cart"}>
							<Button variant="default">Cart({totalQuantity})</Button>
						</Link>
					</Group>

					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						hiddenFrom="sm"
					/>
				</Group>
			</header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />

					{/* <a href="#" className={classes.link}>
						Home
					</a>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Features
							</Box>
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>link here</Collapse>
					<a href="#" className={classes.link}>
						Learn
					</a>
					<a href="#" className={classes.link}>
						Academy
					</a> */}

					<Divider my="sm" />

					<Group justify="center" grow pb="xl" px="md"></Group>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}
