# Coulson

1.  plugin system is there.
2.  you can register a new plugin.
3.  plugins are responsible for validating their on part of the config
4.  using zonejs to detect page -ready in pupeteer.
5.  possibilty to provide your own plugins using coulson.custom.ts (not working yet!)
6.  coulson.custom.ts to provide plugins, and mapping/reducers in config
7.  parallel generation of pages. (will be batched in future, now everything is generated at once)
8.  fully automated worflow. end user needs only 1 command.
9.  easy generating of content (like blogs) traversing folders.
10. parsing metadate from blogs using existing standard (front-matter) (yaml on top of conent file)
11. files are parsed using their extension.
12. markdown file parser already done, more to follow
13. easy instalation using schematics. (break in rc3)

# Schematics 

------
working in some issues in rc3
------

1. ng add @herodevs/coulson-generate
         --blog => create a blog folder with 1 example of md(example with step to step)
	                add blog module with blog component with coulsonComponent
	 
2. ng add @herodevs/coulson-generate --blog=blog_name
2. ng add @herodevs/coulson-generate:add-blog 
            add new blog post in blog folder


3. ng g @herodevs/coulson-generate:add-component
4. ng g @herodevs/coulson-generate:add-blog blog_name
5. ng g @herodevs/coulson-generate:blog blog_name
6. Add coulson to angular.json for add commands into the CLI 

NEXT:
- write more commands for 
- add @latest @next

# Coulson DX

1. Run with Bazel
2. Run with node and recreate servers
3. Copy files and restart automatic servers
