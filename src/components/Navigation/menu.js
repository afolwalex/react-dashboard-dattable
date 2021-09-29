export default {
	items: [
		{
			id: "navigation",
			title: "Navigation",
			type: "group",
			icon: "icon-navigation",
			children: [
				{
					id: "dashboard",
					title: "Dashboard",
					type: "item",
					url: "/dashboard/home",
					icon: "feather icon-home",
				},
			],
		},
		{
			id: "ui-element",
			title: "UI ELEMENT",
			type: "group",
			icon: "icon-ui",
			children: [
				{
					id: "basic",
					title: "Component",
					type: "collapse",
					icon: "feather icon-box",
					children: [
						{
							id: "button",
							title: "Button",
							type: "item",
							url: "/dashboard/component/button",
						},
						{
							id: "badges",
							title: "Badges",
							type: "item",
							url: "/dashboard/component/badges",
						},
					],
				},
			],
		},
		{
			id: "ui-forms",
			title: "Forms & Tables",
			type: "group",
			icon: "icon-group",
			children: [
				{
					id: "form-basic",
					title: "Form Elements",
					type: "item",
					url: "/dashboard/forms",
					icon: "feather icon-file-text",
				},
				{
					id: "bootstrap",
					title: "Table",
					type: "item",
					icon: "feather icon-server",
					url: "/dashboard/tables",
				},
			],
		},
	],
}
