
{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-23.11";
    utils.url = "github:numtide/flake-utils";

  };

  outputs = { self, nixpkgs, utils, ... }:
    (utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        packages.default = pkgs.buildNpmPackage {
          name = "manusdlc-portfolio";

          src = with pkgs.lib; cleanSourceWith {
            filter = path: _: !(builtins.elem (baseNameOf path) [ ".github" ".idea" "flake.nix" "flake.lock" "result" "Caddyfile" ]);
            src = (cleanSource ./.);
          };

          npmDepsHash = "sha256-KJWrVj9HykC0h5Ct1jlig3yUVLpNBASi0VdLMbfQm8Y=";
          npmPackFlags = [ "--ignore-scripts" ];
          installPhase = ''
            mkdir -p $out
            cp -r dist/* $out/
          '';
        };
        packages.tar = pkgs.runCommand "build-tar" {} ''
          cd ${packages.default}
          tar -czf $out .
        '';
      }
    ));
}